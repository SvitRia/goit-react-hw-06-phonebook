import { FilterInput } from "./Filter.styled"

export const Filter = ({ filterName , onFilter }) => {

    return (
      <div> 
         <h3>Find contact by name</h3>
          <FilterInput  
                type="text"
                name="filter"
          
                value={filterName}
          
                onChange={ onFilter}
          
                placeholder="Filter by name..." />
          </div>
        )
    }
    