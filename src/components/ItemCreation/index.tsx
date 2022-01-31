import * as s from './styles'

const ItemCreation : React.FC<{item: {title: string, image: string}}> = ({item}) => {
    const {image, title} = item;
    return(
        <s.Container background={image}>
            <s.Title>{title}</s.Title>
        </s.Container>
    )
}


export default ItemCreation;