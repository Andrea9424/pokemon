const paginateData = (items, currenPage ) => {
    const item_per_page = 20
    const sliceEnd = currenPage * item_per_page
    const sliceStart = sliceEnd - item_per_page
   const itemsInCurrentPage = items.slice(sliceStart, sliceEnd)
   
   const lastPage = Math.ceil(items.length / item_per_page)
   const pages_per_block = 5
   const actualBlock = Math.ceil(currenPage / pages_per_block)
    const pagesInCurrentBlock = []
    const  maxPage = actualBlock * pages_per_block
    const minPage = (maxPage - pages_per_block)  + 1 
    for( let i = minPage; i <= maxPage; i++){
       if(i <= lastPage){
           pagesInCurrentBlock.push(i)
       }
     }
      return{
      itemsInCurrentPage,
      lastPage,
      pagesInCurrentBlock,
      
      }
   }
   
   export {
       paginateData
   }