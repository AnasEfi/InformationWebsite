export function formatDate(date) {
    if (!date) return { day: '', month: '', year: '', hour: '', minute: '' };

    const day = date.getDate();
    const month = date.toLocaleString('ru-RU', { month: 'long' });
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return { day, month, year, hour, minute };
}