import _ from 'lodash';
export function Paginate(allOrders, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(allOrders)
    .slice(startIndex)
    .take(pageSize)
    .value()

}