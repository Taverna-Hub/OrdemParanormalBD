import { RxDashboard } from 'react-icons/rx';
import * as S from './styles';
import { FiUser, FiUsers } from 'react-icons/fi';
import { LuBiohazard, LuShoppingBasket } from 'react-icons/lu';
import { TfiLocationPin } from 'react-icons/tfi';
import { useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();

  return (
    <S.Wrapper>
      <S.Page className={`${location.pathname === '/' && 'active'}`} href="/">
        <S.IconWrapper>
          <RxDashboard />
        </S.IconWrapper>
        <p>Dashboard</p>
      </S.Page>

      <S.Page
        className={`${location.pathname.includes('missoes') && 'active'}`}
        href="/missoes"
      >
        <S.IconWrapper>
          <TfiLocationPin />
        </S.IconWrapper>
        <p>Missões</p>
      </S.Page>

      <S.Page
        className={`${location.pathname.includes('agentes') && 'active'}`}
        href="/agentes"
      >
        <S.IconWrapper>
          <FiUser />
        </S.IconWrapper>
        <p>Agentes</p>
      </S.Page>

      <S.Page
        className={`${location.pathname.includes('equipes') && 'active'}`}
        href="/equipes"
      >
        <S.IconWrapper>
          <FiUsers />
        </S.IconWrapper>
        <p>Equipes</p>
      </S.Page>

      <S.Page
        className={`${location.pathname.includes('ameacas') && 'active'}`}
        href="/ameacas"
      >
        <S.IconWrapper>
          <LuBiohazard />
        </S.IconWrapper>
        <p>Ameaças</p>
      </S.Page>

      <S.Page
        className={`${location.pathname.includes('arsenal') && 'active'}`}
        href="/arsenal"
      >
        <S.IconWrapper>
          <LuShoppingBasket />
        </S.IconWrapper>
        <p>Arsenal</p>
      </S.Page>
    </S.Wrapper>
  );
}
