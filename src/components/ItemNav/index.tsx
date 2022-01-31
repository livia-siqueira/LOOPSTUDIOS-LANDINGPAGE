import * as s from './styles'

const ItemNav : React.FC<{title: string}> = ({title}) => {
    return (
        <s.Button>{title}</s.Button>
    )
} 

export default ItemNav;