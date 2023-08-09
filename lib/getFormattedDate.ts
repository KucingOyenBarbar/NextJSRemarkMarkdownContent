export default function getFormattedDate(dateString: string) {
  return new Intl.DateTimeFormat('id-ID', {dateStyle: "full"}).format(new Date(dateString))
}