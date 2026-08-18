/* =========================================================
   DATTA CREATIONS
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const CONFIG = {

    whatsapp:
        "918367022341",

    email:
        "dattacreations3@gmail.com",

    formspree:
        "https://formspree.io/f/mwppwbzo"

};


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

function smoothNavigate(sectionId) {

    const element =
        document.getElementById(sectionId);


    if (element) {

        element.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }


    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );


    if (
        mobileMenu &&
        !mobileMenu.classList.contains(
            "hidden"
        )
    ) {

        mobileMenu.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobile-menu-btn"
    );


const mobileMenu =
    document.getElementById(
        "mobile-menu"
    );


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "hidden"
            );

        }
    );

}


document
    .querySelectorAll(
        ".mobile-nav-link"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.add(
                    "hidden"
                );

            }
        );

    });


/* =========================================================
   NAVIGATION SCROLL EFFECT
========================================================= */

function handleNavScroll() {

    const nav =
        document.getElementById(
            "main-nav"
        );


    if (
        window.scrollY > 80
    ) {

        nav.style.background =
            "rgba(26,10,16,0.95)";

        nav.style.backdropFilter =
            "blur(10px)";

        nav.style.borderBottom =
            "1px solid rgba(201,150,14,0.15)";

    } else {

        nav.style.background =
            "transparent";

        nav.style.backdropFilter =
            "none";

        nav.style.borderBottom =
            "none";

    }

}


window.addEventListener(
    "scroll",
    handleNavScroll,
    {
        passive: true
    }
);


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function handleScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".animate-on-scroll"
        );


    elements.forEach(element => {

        const rect =
            element.getBoundingClientRect();


        if (
            rect.top <
            window.innerHeight * 0.85
        ) {

            element.classList.add(
                "visible"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    handleScrollAnimations,
    {
        passive: true
    }
);


handleScrollAnimations();


/* =========================================================
   SPARKLES
========================================================= */

function createSparkles() {

    const container =
        document.getElementById(
            "sparkle-container"
        );


    if (!container) return;


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const sparkle =
            document.createElement(
                "div"
            );


        sparkle.className =
            "sparkle";


        sparkle.style.left =
            Math.random() * 100 + "%";


        sparkle.style.top =
            Math.random() * 100 + "%";


        sparkle.style.animationDelay =
            Math.random() * 5 + "s";


        sparkle.style.animationDuration =
            (
                2 +
                Math.random() * 4
            ) + "s";


        container.appendChild(
            sparkle
        );

    }

}


/* =========================================================
   PETALS
========================================================= */

function createPetals() {

    const container =
        document.getElementById(
            "petal-container"
        );


    if (!container) return;


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const petal =
            document.createElement(
                "div"
            );


        petal.className =
            "petal";


        petal.style.left =
            Math.random() * 100 + "%";


        petal.style.top =
            "-5%";


        petal.style.animationDelay =
            Math.random() * 8 + "s";


        petal.style.animationDuration =
            (
                6 +
                Math.random() * 6
            ) + "s";


        const size =
            8 +
            Math.random() * 10;


        petal.style.width =
            size + "px";


        petal.style.height =
            size + "px";


        container.appendChild(
            petal
        );

    }

}


/* =========================================================
   FAQ DATA
========================================================= */

const faqData = [

    {
        q:
            "How much does a professional business website cost in India?",

        a:
            "Our affordable website design packages start at ₹8,000 for basic websites. Professional business websites typically range from ₹15,000–₹50,000+. E-commerce websites with payment gateway integration start at ₹30,000+. Enterprise solutions are custom-quoted."
    },


    {
        q:
            "What makes the best website design company?",

        a:
            "The best website design company delivers SEO-optimized, mobile-friendly and fast-loading websites that convert visitors into customers. Datta Creations combines professional design, responsive development, SEO foundations and business-focused UX."
    },


    {
        q:
            "Why does my business need a professional website?",

        a:
            "A professional business website helps establish credibility, reach customers, rank on Google, generate leads, increase sales and build brand trust. Your website acts as a 24/7 digital presence for your business."
    },


    {
        q:
            "How long does it take to develop a professional website?",

        a:
            "Basic websites generally take around 5–10 days, business websites around 2–3 weeks, e-commerce websites around 3–4 weeks and larger custom projects around 4–6 weeks depending on requirements."
    },


    {
        q:
            "Do you build SEO-friendly websites that rank on Google?",

        a:
            "Yes. Websites are built with responsive design, performance optimization, structured data, meta information, semantic HTML and other SEO foundations. Search ranking also depends on competition and ongoing SEO work."
    },


    {
        q:
            "Can you redesign my old website to make it modern?",

        a:
            "Yes. We can redesign outdated websites with modern responsive layouts, better UX, improved mobile compatibility, faster performance and a more contemporary visual style."
    },


    {
        q:
            "Do you create e-commerce websites with payment integration?",

        a:
            "Yes. E-commerce projects can include shopping carts, product catalogues, payment gateway integration, inventory management, checkout systems, order management and mobile-optimized shopping experiences."
    },


    {
        q:
            "Do you provide website maintenance and support?",

        a:
            "Yes. Website maintenance can include updates, security monitoring, performance optimization, bug fixes, content changes and technical support."
    },


    {
        q:
            "What industries do you design websites for?",

        a:
            "We create websites for restaurants, hotels, real estate, healthcare, education, gyms, salons, photographers, event planners, builders, retail stores, e-commerce businesses, startups and many service providers."
    },


    {
        q:
            "Are all your websites mobile-friendly and responsive?",

        a:
            "Yes. Responsive layouts are used so websites work across smartphones, tablets, laptops and desktop screens."
    },


    {
        q:
            "How fast do your websites load?",

        a:
            "Performance is a priority. We optimize images, code, layouts and other assets to provide fast-loading websites. Actual performance depends on hosting, content, features and third-party services."
    },


    {
        q:
            "Can I update my website content myself?",

        a:
            "Depending on the project, we can build or connect a suitable content-management solution, or provide content update support after launch."
    },


    {
        q:
            "Where are you located? Do you serve my city?",

        a:
            "Datta Creations is based in Hyderabad and can work with clients across Telangana, Andhra Pradesh and other parts of India."
    },


    {
        q:
            "What's your website design process?",

        a:
            "Our process generally includes inquiry, requirements discussion, project confirmation, design, review and revisions, development, testing, SEO preparation, deployment, domain connection and final handover."
    },


    {
        q:
            "Do you provide ongoing SEO and digital marketing?",

        a:
            "Basic SEO preparation can be included with website projects. Advanced SEO, content marketing, advertising and other digital marketing work may require a separate scope."
    },


    {
        q:
            "What makes your websites different from others?",

        a:
            "We focus on combining attractive UI, strong UX, responsive design, performance, SEO foundations, modern interactions and business-focused presentation."
    },


    {
        q:
            "Do you offer free website design consultations?",

        a:
            "Yes. You can contact Datta Creations to discuss your business, website requirements, budget and timeline before deciding on a project."
    }

];


/* =========================================================
   RENDER FAQ
========================================================= */

function renderFAQs() {

    const container =
        document.getElementById(
            "faq-container"
        );


    if (!container) return;


    container.innerHTML = "";


    faqData.forEach(
        (faq, index) => {

            const wrapper =
                document.createElement(
                    "div"
                );


            wrapper.className =
                "faq-item glass rounded-xl overflow-hidden animate-on-scroll";


            wrapper.innerHTML = `

                <button
                    class="faq-btn w-full flex items-center justify-between p-5 text-left"
                    type="button"
                    data-index="${index}"
                >

                    <span
                        class="text-gold-200 font-medium text-sm pr-4"
                    >
                        ${faq.q}
                    </span>

                    <span
                        class="faq-icon text-gold-400"
                    >
                        ▼
                    </span>

                </button>


                <div
                    class="faq-answer hidden px-5 pb-5"
                >

                    <p
                        class="text-maroon-300 text-sm leading-relaxed"
                    >
                        ${faq.a}
                    </p>

                </div>

            `;


            const button =
                wrapper.querySelector(
                    ".faq-btn"
                );


            button.addEventListener(
                "click",
                () => {

                    toggleFaq(button);

                }
            );


            container.appendChild(
                wrapper
            );

        }
    );


    handleScrollAnimations();

}


/* =========================================================
   FAQ TOGGLE
========================================================= */

function toggleFaq(button) {

    const answer =
        button.nextElementSibling;


    const icon =
        button.querySelector(
            ".faq-icon"
        );


    const wasHidden =
        answer.classList.contains(
            "hidden"
        );


    document
        .querySelectorAll(
            ".faq-answer"
        )
        .forEach(
            item => {

                item.classList.add(
                    "hidden"
                );

            }
        );


    document
        .querySelectorAll(
            ".faq-icon"
        )
        .forEach(
            item => {

                item.style.transform =
                    "rotate(0deg)";

            }
        );


    if (wasHidden) {

        answer.classList.remove(
            "hidden"
        );


        icon.style.transform =
            "rotate(180deg)";

    }

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contact-name"
                ).value.trim();


            const email =
                document.getElementById(
                    "contact-email"
                ).value.trim();


            const websiteType =
                document.getElementById(
                    "contact-website-type"
                ).value.trim();


            const message =
                document.getElementById(
                    "contact-message"
                ).value.trim();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const success =
                document.getElementById(
                    "form-success"
                );


            if (
                !name ||
                !email ||
                !websiteType ||
                !message
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            const originalText =
                submitButton.textContent;


            submitButton.disabled =
                true;

            submitButton.textContent =
                "Sending...";


            const formattedMessage =

                `Hi, I'm ${name} (${email}).

I want a ${websiteType} website.

Additional message:
${message}`;


            try {

                const response =
                    await fetch(
                        CONFIG.formspree,
                        {

                            method:
                                "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({

                                    name,

                                    email,

                                    message:
                                        formattedMessage

                                })

                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Form submission failed"
                    );

                }


                success.classList.remove(
                    "hidden"
                );


                contactForm.reset();


                submitButton.disabled =
                    false;

                submitButton.textContent =
                    originalText;


                setTimeout(
                    () => {

                        const whatsappURL =

                            `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
                                formattedMessage
                            )}`;


                        window.open(
                            whatsappURL,
                            "_blank"
                        );

                    },
                    800
                );


                setTimeout(
                    () => {

                        success.classList.add(
                            "hidden"
                        );

                    },
                    4000
                );


            } catch (error) {

                console.error(
                    error
                );


                alert(
                    "There was an error sending the form. Please contact us directly on WhatsApp."
                );


                submitButton.disabled =
                    false;

                submitButton.textContent =
                    originalText;

            }

        }
    );

}


/* =========================================================
   KNOWLEDGE BASE
========================================================= */

const knowledgeBase = {

    "build my website":

`Wonderful! We'd love to help.

Please tell us:

• Your business name
• What your business does
• The type of website you need
• Approximate number of pages
• Design preferences
• Features you need

Once we receive your requirements, we'll guide you through the next steps.`,


    "view portfolio":

`Absolutely!

You can explore our Portfolio section to see examples of websites we've designed for different industries and businesses.

We create business websites, portfolio websites, event websites, e-commerce websites and many more.` ,


    "website pricing":

`Our website pricing depends on your requirements.

💰 Starter: ₹8,000

💰 Professional: ₹15,000

💰 Premium: ₹30,000+

E-commerce and larger custom projects can be quoted separately.

Contact us for a personalized quotation.` ,


    "development process":

`Our development process generally follows these stages:

1️⃣ Submit inquiry
2️⃣ Discuss requirements
3️⃣ Project confirmation
4️⃣ Website design
5️⃣ Preview and review
6️⃣ Revisions
7️⃣ Development
8️⃣ Testing
9️⃣ Deployment
🔟 Domain connection and handover` ,


    "dev process":

`Our development process includes:

1️⃣ Submit inquiry
2️⃣ Discuss requirements
3️⃣ Project confirmation
4️⃣ Website design
5️⃣ Preview and review
6️⃣ Revisions
7️⃣ Development
8️⃣ Testing
9️⃣ Deployment
🔟 Domain connection and handover` ,


    "payment":

`Our payment structure can be discussed during project confirmation.

For many projects, payment is divided into stages so the customer and developer can work comfortably through design, approval and deployment.` ,


    "seo":

`Yes!

Our websites can include SEO foundations such as:

✓ Responsive design
✓ Mobile optimization
✓ Fast-loading layouts
✓ Meta information
✓ Structured data
✓ Semantic HTML
✓ Clean page structure
✓ Search-friendly content structure

Actual Google ranking depends on competition, content, authority and ongoing SEO.` ,


    "mobile":

`Yes!

We build responsive websites for:

✓ Smartphones
✓ Tablets
✓ Laptops
✓ Desktops

The layout automatically adapts to different screen sizes.` ,


    "delivery":

`Typical development times vary by project:

⏱️ Basic websites: around 5–10 days

📅 Business websites: around 2–3 weeks

🛒 E-commerce: around 3–4 weeks

✨ Larger custom websites: around 4–6 weeks

The final timeline depends on the project scope.` ,


    "portfolio":

`Our portfolio includes websites for:

• Restaurants
• Hotels
• Real Estate
• Healthcare
• Education
• Fitness
• Salons
• Photography
• Event Planning
• E-commerce
• Car Rentals
• Service Businesses

Visit the Portfolio section to explore live examples.` ,


    "contact":

`You can reach Datta Creations through:

📱 WhatsApp:
+91 83670 22341

📧 Email:
dattacreations3@gmail.com

🌐 Website:
dattacreations.in

📍 Hyderabad, Telangana, India` ,


    "services":

`We design websites for:

💼 Business websites
🎨 Portfolio websites
🛍️ E-commerce stores
📱 Landing pages
🎉 Event websites
🍽️ Restaurant websites
📸 Photography websites
🏠 Real estate websites
🚗 Car rental websites
👔 Corporate websites
🎓 Educational websites
💅 Salon websites
🏋️ Fitness websites

Every project is designed around the customer's requirements.` ,


    "why choose":

`Datta Creations focuses on:

✨ Attractive UI
💫 Strong UX
⚡ Performance
📱 Responsive design
🔍 SEO foundations
🎨 Modern interactions
💎 Professional typography
🎯 Conversion-focused presentation
🛡️ Reliable implementation
💬 Customer support` ,


    "hello":

`Hello! 👋

Welcome to Datta Creations.

I'm your AI Website Consultant.

I can help with:

• Services
• Pricing
• Portfolio
• Development process
• SEO
• E-commerce
• Contact information` ,


    "hi":

`Hi there! 👋

Welcome to Datta Creations.

Ask me anything about our website services, pricing, portfolio or development process.` ,


    "about":

`Datta Creations is a professional website design and development company.

We specialize in:

• Custom business websites
• E-commerce platforms
• Portfolio websites
• Digital invitations
• Landing pages
• Event websites

We focus on modern UI, responsive development, performance and business presentation.` ,


    "redesign":

`Yes!

We can redesign outdated websites with:

✓ Responsive design
✓ Mobile optimization
✓ Faster loading
✓ Improved UX
✓ Modern visual design
✓ Better conversion-focused layouts` ,


    "ecommerce":

`Absolutely!

E-commerce projects can include:

🛒 Shopping cart
💳 Payment gateways
📦 Product catalogue
📊 Inventory
📱 Mobile checkout
🔒 Secure checkout
📈 Order management
🛡️ Security features` ,


    "default":

`That's a great question! 👋

I can help with:

• Build My Website
• View Portfolio
• Website Pricing
• Development Process
• Payment
• SEO Services
• Mobile Compatibility
• E-Commerce
• Website Redesign
• Contact Us

You can also contact us directly:

📱 WhatsApp:
+91 83670 22341

📧 Email:
dattacreations3@gmail.com`

};


/* =========================================================
   AI RESPONSE
========================================================= */

function getAIResponse(
    userMessage
) {

    const message =
        userMessage
            .toLowerCase()
            .trim();


    /*
     * Specific intent checks first.
     */

    if (
        message.includes("price") ||
        message.includes("pricing") ||
        message.includes("cost") ||
        message.includes("budget")
    ) {

        return knowledgeBase[
            "website pricing"
        ];

    }


    if (
        message.includes("seo") ||
        message.includes("google ranking")
    ) {

        return knowledgeBase[
            "seo"
        ];

    }


    if (
        message.includes("mobile") ||
        message.includes("responsive")
    ) {

        return knowledgeBase[
            "mobile"
        ];

    }


    if (
        message.includes("portfolio") ||
        message.includes("projects")
    ) {

        return knowledgeBase[
            "portfolio"
        ];

    }


    if (
        message.includes("ecommerce") ||
        message.includes("e-commerce") ||
        message.includes("online store")
    ) {

        return knowledgeBase[
            "ecommerce"
        ];

    }


    if (
        message.includes("contact") ||
        message.includes("whatsapp") ||
        message.includes("email")
    ) {

        return knowledgeBase[
            "contact"
        ];

    }


    if (
        message.includes("service") ||
        message.includes("what do you do")
    ) {

        return knowledgeBase[
            "services"
        ];

    }


    if (
        message.includes("redesign") ||
        message.includes("old website")
    ) {

        return knowledgeBase[
            "redesign"
        ];

    }


    if (
        message.includes("process") ||
        message.includes("how do you build")
    ) {

        return knowledgeBase[
            "development process"
        ];

    }


    if (
        message === "hi" ||
        message === "hello" ||
        message === "hey"
    ) {

        return knowledgeBase[
            "hello"
        ];

    }


    /*
     * General knowledge-base matching.
     */

    for (
        const [key, value]
        of Object.entries(
            knowledgeBase
        )
    ) {

        if (
            message.includes(key)
        ) {

            return value;

        }

    }


    return knowledgeBase.default;

}


/* =========================================================
   CHATBOT ELEMENTS
========================================================= */

const chatToggle =
    document.getElementById(
        "ai-toggle-btn"
    );


const chatWidget =
    document.getElementById(
        "ai-chatbot-widget"
    );


const closeChat =
    document.getElementById(
        "close-chatbot"
    );


const chatInput =
    document.getElementById(
        "chat-input"
    );


const sendButton =
    document.getElementById(
        "send-btn"
    );


const messages =
    document.getElementById(
        "chat-messages"
    );


/* =========================================================
   OPEN AI CHAT
========================================================= */

function openAIChat() {

    chatWidget.classList.remove(
        "hidden"
    );


    chatToggle.style.opacity =
        "0";

    chatToggle.style.pointerEvents =
        "none";


    setTimeout(
        () => {

            chatInput.focus();

        },
        100
    );

}


window.openAIChat =
    openAIChat;


/* =========================================================
   CLOSE AI CHAT
========================================================= */

function closeAIChat() {

    chatWidget.classList.add(
        "hidden"
    );


    chatToggle.style.opacity =
        "1";

    chatToggle.style.pointerEvents =
        "auto";

}


if (closeChat) {

    closeChat.addEventListener(
        "click",
        closeAIChat
    );

}


if (chatToggle) {

    chatToggle.addEventListener(
        "click",
        () => {

            if (
                chatWidget.classList.contains(
                    "hidden"
                )
            ) {

                openAIChat();

            } else {

                closeAIChat();

            }

        }
    );

}


/* =========================================================
   SEND CHAT MESSAGE
========================================================= */

function sendMessage() {

    const message =
        chatInput.value.trim();


    if (!message) return;


    /*
     * User message
     */

    const userMessage =
        document.createElement(
            "div"
        );


    userMessage.className =
        "user-message";


    userMessage.textContent =
        message;


    messages.appendChild(
        userMessage
    );


    chatInput.value =
        "";


    messages.scrollTop =
        messages.scrollHeight;


    /*
     * Typing indicator
     */

    const typing =
        document.createElement(
            "div"
        );


    typing.className =
        "ai-message";


    typing.innerHTML = `

        <div class="typing-indicator">

            <span></span>
            <span></span>
            <span></span>

        </div>

    `;


    messages.appendChild(
        typing
    );


    messages.scrollTop =
        messages.scrollHeight;


    /*
     * Response
     */

    setTimeout(
        () => {

            typing.remove();


            const response =
                getAIResponse(
                    message
                );


            const aiMessage =
                document.createElement(
                    "div"
                );


            aiMessage.className =
                "ai-message";


            aiMessage.textContent =
                response;


            messages.appendChild(
                aiMessage
            );


            messages.scrollTop =
                messages.scrollHeight;

        },
        800
    );

}


/* =========================================================
   SEND BUTTON
========================================================= */

if (sendButton) {

    sendButton.addEventListener(
        "click",
        sendMessage
    );

}


/* =========================================================
   ENTER KEY
========================================================= */

if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );

}


/* =========================================================
   SUGGESTION BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".suggestion-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;


                chatInput.value =
                    question;


                sendMessage();

            }
        );

    });


/* =========================================================
   EXTERNAL LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href^="http"]'
    )
    .forEach(link => {

        if (
            link.hostname !==
            window.location.hostname
        ) {

            link.setAttribute(
                "target",
                "_blank"
            );

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }

    });


/* =========================================================
   LUCIDE
========================================================= */

function initializeIcons() {

    if (
        typeof lucide !==
        "undefined"
    ) {

        lucide.createIcons();

    }

}


window.addEventListener(
    "load",
    () => {

        initializeIcons();

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

createSparkles();

createPetals();

renderFAQs();

handleNavScroll();

handleScrollAnimations();


console.log(
    "Datta Creations website loaded successfully."
);