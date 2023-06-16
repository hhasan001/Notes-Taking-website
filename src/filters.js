const Filters ={
    searchText:"",
    sortBy:"byEdited"
}

const getFilters=()=>Filters
const setFilters = (updates)=>{
    if(typeof updates.searchText==='string'){
        Filters.searchText=updates.searchText
    }
    if(typeof updates.sortBy==='string'){
        Filters.sortBy=updates.sortBy
    }
    
}
export {getFilters, setFilters}