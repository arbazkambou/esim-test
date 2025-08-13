export type DataLayerEvent = { event?: string; [key: string]: unknown };

export function sendGTMEvent<T extends DataLayerEvent>(obj: T): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
  w.dataLayer.push(obj);
}
