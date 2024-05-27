import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    })
});

describe('getFooterCopy', () => {
    it('should return "Holberton School" when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('should return "Holberton School main dashboard" when isIndex is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotifications', () => {
    it('should return a string containing "<strong>Urgent requirement</strong>"', () => {
        const latestNotification = getLatestNotification();
        expect(latestNotification).toContain('<strong>Urgent requirement</strong>');
    });
});
