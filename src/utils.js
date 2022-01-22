export const paginator = ({data,count,take,page})=>{
  return {
    currentPage:data.length?page:1,
    data,
    itemsPerPage:data.length,
    totalPages:take? count %take != 0? (count-(count%take))/take+1 :count/take:count
  }
}