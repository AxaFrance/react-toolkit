import cuid from 'cuid';

export function useId(id: string) {
  return id ?? createId();
}

export function createId() {
  return cuid();
}
