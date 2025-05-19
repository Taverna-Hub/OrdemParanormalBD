type GetLastMonthAndYearProps = {
  month: number;
  year: number;
};

export function getLastMonthAndYear(): GetLastMonthAndYearProps {
  const now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();

  if (month === 0) {
    month = 11;
    year -= 1;
  } else {
    month -= 1;
  }

  return { month: month + 1, year };
}
