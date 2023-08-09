import { fail } from '@sveltejs/kit';
// @ts-ignore
import mailService from '@sendgrid/mail';
import { MAIL_API_KEY } from '$env/static/private';

mailService.setApiKey(MAIL_API_KEY);

export const actions = {
    // @ts-ignore
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const name = formData.get('name');
        const message = formData.get('message');
        const phone = formData.get('phone');
        if (!name)
            return fail(400, { name, missingName: true });
        if (!isValidEmail(email) && !isValidPhoneNumber(phone))
            return fail(400, { email, missingContact: true });
        if (!message)
            return fail(400, { message, missingMessage: true });
        const msg = {
            to: "kominiakpoczta@gmail.com",
            from: "mkominiak11@gmail.com",
            subject: "Dostałaś wiadomość wysłaną przez twoją stronę!",
            text: `Mail: ${email}\nTelefon: ${phone}\nWiadomość:\n${message}`
        }
        return await mailService.send(msg)
            .then(() => {
                return { success: true };
            })
            .catch(() => {
                return { failWhileSending: true };
            })
    }
}

// @ts-ignore
function isValidPhoneNumber(phone) {
    const cleanedPhoneNumber = phone.replace(/\D/g, '');
    const phoneRegex = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
    return phoneRegex.test(cleanedPhoneNumber);
}

// @ts-ignore
function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}