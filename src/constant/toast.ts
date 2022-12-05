export const defaultToastMessage = {
  loading: 'Loading...',
  success: 'Success',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (err: any) =>
    err?.response?.data?.errors ?? 'Terjadi Kesalahan, Silahkan Coba Lagi',
};
