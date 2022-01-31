import ItemNav from '../ItemNav';
import * as s from './styles'

const Nav : React.FC<{page: string}> = ({page}) => {
    return(
        <s.Nav page={page}>
          <ItemNav title="About" />
          <ItemNav title="Careers" />
          <ItemNav title="Events" />
          <ItemNav title="Products" />
          <ItemNav title="Support" />
        </s.Nav>
    )
}

export default Nav;