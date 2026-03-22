import { useRef, useCallback } from "react"
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
  const contentRef = useRef<HTMLDivElement>(null)
  useMermaidEffect()

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        router.push("/")
      }
    },
    [router]
  )

  if (!data) return null
  return (
    <StyledWrapper data-type={data.type} onClick={handleBackdropClick}>
      <div ref={contentRef}>
        {data.type[0] === "Page" && <PageDetail />}
        {data.type[0] !== "Page" && <PostDetail />}
      </div>
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  padding: 2rem 0;
  min-height: 100vh;
  cursor: pointer;

  > div {
    cursor: default;
  }

  &[data-type="Paper"] {
    padding: 40px 0;
  }
  /** Reference: https://github.com/chriskempson/tomorrow-theme **/
  code[class*="language-mermaid"],
  pre[class*="language-mermaid"] {
    background-color: ${({ theme }) => theme.colors.gray5};
  }
`
