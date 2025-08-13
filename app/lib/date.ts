// Deterministic, locale-stable date formatting for SSR/CSR parity
export function formatDateUTC(iso?: string | null) {
    if (!iso) return "";
    const d = new Date(iso);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "UTC",
    }).format(d);
}
