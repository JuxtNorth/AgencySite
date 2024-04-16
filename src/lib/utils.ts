import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function seed(s: number) {
	const mask = 0xffffffff;
	let m_w = (123456789 + s) & mask;
	let m_z = (987654321 - s) & mask;

	return () => {
		m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
		m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

		let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
		result /= 4294967296;
		return result;
	};
}

export const parseBoldDirective = (text: string): string => {
	const regexBold = /\*\*(.*?)\*\*/gm;
	const html = text.replace(regexBold, '<strong>$1</strong>');
	return html;
};

export const lerp = (a: number, b: number, t: number): number => {
	return a + (b - a) * t;
};