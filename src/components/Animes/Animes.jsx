import Card from "../../ui/Card/Card"

const Animes = ({items}) => (
    <ul className='items'>      
    {
        items?.map((item) => (
        <li key={item.id}>    
          
          <Card 
            coverImage={item.coverImage.medium}
            title={item.title.userPreferred}
            score={item.averagedCover}
            seasonYear={item.seasonYear}
          />
        </li>  
    ))
  }
    </ul>  
)
   
export default Animes


