import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-weight: 700;
  font-size: 1.1rem;
  color: rgb(234, 88, 12);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`
