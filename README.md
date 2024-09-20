# SanityCommerce

SanityCommerce is a modern and performant full-stack e-commerce website built with the latest technologies, including Next.js 14, Sanity.io for content management, Stripe for secure payment integration, and styled beautifully with Tailwind CSS and Shadcn UI for accessible components. This project showcases a scalable and flexible solution for building an e-commerce platform with easy-to-manage content and secure payment processing.

## Features

- **Next.js 14**: Provides server-side rendering, static site generation, and API routes for a fast and scalable application.
- **Sanity.io**: Headless CMS for managing products, categories, and blog content with real-time updates.
- **GROQ (Query Language)**: Used for fetching data from Sanity's API with precision.
- **Stripe Payment Integration**: Secure and fast payment processing using Stripe for checkout.
- **Tailwind CSS**: Utility-first CSS framework for responsive design and rapid UI development.
- **Shadcn UI**: Accessible and customizable UI components for an enhanced user experience.
- **Shopping Cart**: Powered by [use-shopping-cart](https://useshoppingcart.com/), a lightweight, secure, and easy-to-implement shopping cart library.

## Screenshots

![Homepage Screenshot](https://github.com/user-attachments/assets/cc7274f2-f253-415b-ae50-2c94cdb17e08)
*Homepage, hero*
<br/><br/>
![captures_chrome-capture-2024-8-19 (1)](https://github.com/user-attachments/assets/b62f4040-af5f-4ff9-9b90-e58d4995912e)
*Homepage, newer products*
<br/><br/>
![captures_chrome-capture-2024-8-19 (2)](https://github.com/user-attachments/assets/b4155373-cd6e-4932-bf21-33c690f0bc1a)
*Product detail page*
<br/><br/>
![captures_chrome-capture-2024-8-19 (3)](https://github.com/user-attachments/assets/5372e170-9f2c-46ed-9e89-37c8df2e98b4)
*Shopping cart*
<br/><br/>
![captures_chrome-capture-2024-8-19 (4)](https://github.com/user-attachments/assets/8f62f144-ae46-4121-9852-88a6d8ebb6b0)
*Stripe checkout*
<br/><br/>
![captures_chrome-capture-2024-8-19 (5)](https://github.com/user-attachments/assets/3bb77707-f023-4fad-8c55-aa500b014548)
*Sanity Studio, vision*
<br/><br/>
![captures_chrome-capture-2024-8-19 (6)](https://github.com/user-attachments/assets/00e55115-efe5-42ec-a490-636ff58eeebb)
*Sanity Studio, structure*

## Demo

[Live Demo](https://sanity-commerce-javigong.vercel.app/)

## Technologies Used

- **Next.js 14**: [https://nextjs.org/](https://nextjs.org/)
- **Sanity.io**: [https://www.sanity.io/](https://www.sanity.io/)
- **GROQ**: Sanity's open-source query language, used to efficiently query data.
- **Stripe**: [https://stripe.com/](https://stripe.com/)
- **Shadcn UI**: [https://ui.shadcn.com/](https://ui.shadcn.com/)
- **use-shopping-cart**: [https://useshoppingcart.com/](https://useshoppingcart.com/)
- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)

## Query Language: GROQ

This project utilizes **GROQ** (Graph-Relational Object Queries), Sanity's open-source query language. GROQ is a powerful and intuitive language that makes it easy to request exactly the information needed for the application.

With **GROQ**, you can:

- Describe exactly what information your application needs.
- Join data from multiple sets of documents.
- Stitch together a custom response with only the exact fields you require.

For more details on GROQ, visit [Sanity GROQ](https://www.sanity.io/docs/groq).

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/javigong/next-sanity-commerce-stripe.git
   cd next-sanity-commerce-stripe
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:

- Create a .env.local file in the root directory.
- Add your Sanity and Stripe credentials as follows:
```bash
NEXT_PUBLIC_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_DATASET=your_sanity_dataset
NEXT_PUBLIC_API_VERSION=your_sanity_api_version
NEXT_PUBLIC_STRIPE_KEY=your_public_stripe_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000.

## Usage

- **Sanity Studio**: You can access Sanity Studio for content management by setting up a Sanity.io account and linking it to this project.
- **Product Management**: Easily add, update, or delete products from the Sanity.io CMS, and see the changes reflected in real time on the e-commerce website.
- **Shopping Cart and Checkout**: Use the secure shopping cart and Stripe integration for payment processing.
- **GROQ Queries**: Fetch product data and other dynamic content using GROQ.
