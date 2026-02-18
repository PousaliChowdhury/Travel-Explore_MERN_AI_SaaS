const Groq = require("groq-sdk");
const Package = require("../models/Package");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.travelAI = async (req, res) => {
  try {
    const { message } = req.body;
    const packages = await Package.find().limit(20);

    const packageInfo = packages
      .map(
        (p) => `Title: ${p.title}
                Category: ${p.category}
                Location: ${p.location}
                Duration: ${p.duration}
                Price per person: ₹${p.basePrice}`
      )
      .join("\n");

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `
You are Travel & Explore AI Travel Assistant.

Available packages in database:
${packageInfo}

Rules:
- Recommend ONLY from available packages.
- All prices are per person.
- Users can select number of travellers during checkout.
- DO NOT use markdown tables.
- DO NOT use "|" symbols.
- Make sure to use "\n" for new package info.
- Format responses as clean bullet points.
- Be concise and professional.


Example format:

Here are the wildlife packages we offer: (use "\n" here)

• Sundarban Tour – West Bengal – ₹12,000 per person  (use "\n" here)
• Dooars Tour – North Bengal – ₹25,000 per person  
• Madhya Pradesh Wildlife Tour – ₹24,000 per person  
• Nepal Wildlife Tour – ₹25,000 per person  

Ask the user if they want more details.`,

        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI error" });
  }
};
