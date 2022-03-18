export interface TableProps {
  rows: string[];
  data: { [key: string | number]: string | number | boolean }[] | null;
  onClickRoute?: { link: string; key: string };
}
