import { ButtonLogout, ContainerImg, HeaderContainer, HeaderContent, HeaderProfileContent, ProfileTitle } from "./styles"
import {BiLogOut} from 'react-icons/bi';

export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderContent>
        <HeaderProfileContent>
          <ContainerImg>
            <img src="https://avatars.githubusercontent.com/u/33066367?v=4" alt="Douglas Almeida" />
          </ContainerImg>
          <ProfileTitle>Meu perfil</ProfileTitle>
        </HeaderProfileContent>

        <ButtonLogout>
          <BiLogOut size={32}/>
        </ButtonLogout>
      </HeaderContent>
    </HeaderContainer>
  )
}