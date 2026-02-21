const BASE = 'https://babypillars.com';

export const canonical = (path: string) => ({
  alternates: { canonical: `${BASE}${path}` },
});
