import React from 'react';

const ContactForm = () => {
    return (
        <div className="p-1 w-full h-min bg-gradient-to-tl from-stardust to-boilermaker-gold to-80%">
            <div className="px-4 pt-4 pb-6 bg-dusk">
                <h2 className="font-display text-white mb-8 text-3xl t text-left">Contact Us</h2>
                <form action="https://formspree.io/f/xqazodjj" method="POST" className="flex flex-col w-full space-y-3 bg-dusk text-dusk text-lg text-left font-display">
                    <label htmlFor="email" className="text-white">Your email</label>
                    <input type="email" name="email" className="w-full p-1 pl-2" />
                    <label htmlFor="message" className="text-white">Your message</label>
                    <textarea name="message" className="p-1 pl-2 h-36 font-display"></textarea>
                    <input type="submit" value="Send" className="background-white bg-stardust text-white font-display hover:bg-boilermaker-gold hover:text-white py-2" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;