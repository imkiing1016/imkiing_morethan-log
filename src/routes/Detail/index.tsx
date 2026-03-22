import { useEffect, useRef, useCallback } from "react"
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
  const wrapperRef = useRef<HTMLDivElement>(null)
  useMermaidEffect()

  const goHome = useCallback(() => {
    router.push("/")
  }, [router])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // 포스트 카드 내부 클릭이면 무시
      if (target.closest("[data-post-card]")) return
      // Detail overlay 영역 내부 클릭만 처리
      if (wrapperRef.current?.contains(target)) {
        goHome()
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [goHome])

  if (!data) return null
  return (
    <StyledWrapper ref={wrapperRef} data-type={data.type}>
      {data.type[0] === "Page" && <PageDetail />}
      {data.type[0] !== "Page" && <PostDetail />}
      <div className="bottom-tap-area" />
    </StyledWrapper>
  )
}

export default Detail

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 5rem 1rem 0;
  cursor: pointer;
  z-index: 29;

  .bottom-tap-area {
    width: 100%;
    min-height: 50vh;
  }

  &[data-type="Paper"] {
    padding-top: 5rem;
  }
  /** Reference: https://github.com/chriskempson/tomorrow-theme **/
  code[class*="language-mermaid"],
  pre[class*="language-mermaid"] {
    background-color: ${({ theme }) => theme.colors.gray5};
  }
`
