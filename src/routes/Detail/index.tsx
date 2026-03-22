import { useCallback } from "react"
import { useRouter } from "next/router"
import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import PageDetail from "./PageDetail"
import styled from "@emotion/styled"
import usePostQuery from "src/hooks/usePostQuery"

type Props = {}

const Detail: React.FC<Props> = () => {
  const data = usePostQuery()
  const router = useRouter()
  useMermaidEffect()

  const handleBackdropClick = useCallback(() => {
    router.push("/")
  }, [router])

  if (!data) return null
  return (
    <StyledWrapper data-type={data.type} onClick={handleBackdropClick}>
      {data.type[0] === "Page" && <PageDetail />}
      {data.type[0] !== "Page" && <PostDetail />}
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  padding: 2rem 0 8rem;
  min-height: 100vh;
  cursor: pointer;
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  &[data-type="Paper"] {
    padding: 40px 0 8rem;
  }
  /** Reference: https://github.com/chriskempson/tomorrow-theme **/
  code[class*="language-mermaid"],
  pre[class*="language-mermaid"] {
    background-color: ${({ theme }) => theme.colors.gray5};
  }
`
