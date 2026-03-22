import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

const NavBar: React.FC = () => {
  const router = useRouter()
  const isAboutPage = router.pathname === "/about"

  const links = [
    {
      id: 1,
      name: isAboutPage ? "Post" : "About",
      to: isAboutPage ? "/" : "/about",
    },
  ]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
