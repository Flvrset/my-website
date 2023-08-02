import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const name = formData.get('name');
        const message = formData.get('message');
        const phone = formData.get('phone');
        if (!isValidName(name))
            return fail(400, { name, missingName: true });
        if (!isValidEmail(email) && !isValidPhoneNumber(phone))
            return fail(400, { email, missingContact: true });
        if (!message)
            return fail(400, { message, missingMessage: true });
        return { success: true };
    }
}

function isValidPhoneNumber(phone) {
    const cleanedPhoneNumber = phone.replace(/\D/g, '');
    const phoneRegex = RegExp("(^|\W)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)");
    return phoneRegex.test(cleanedPhoneNumber);
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    const nameRegex = /^[a-zA-Z\u00C0-\u017F'’-]+(?: [a-zA-Z\u00C0-\u017F'’-]+)*$/;
    return nameRegex.test(name);
  }