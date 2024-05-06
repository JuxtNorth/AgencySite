import { cva } from "class-variance-authority";

export const highlightVariant = cva('', {
	variants: {
		variant: {
			a: 'text-blood-red',
			b: 'text-green',
			c: 'text-blue',
			d: 'text-blue',
			e: 'text-blood-red',
			f: 'text-green'
		}
	}
});