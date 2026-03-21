import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  const [lastVisited, setLastVisited] = useState<string>("")

  useEffect(() => {
    const now = new Date()
    const formatted = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    setLastVisited(formatted)
  }, [])

  return (
    <StyledWrapper className={className}>
      <span>마지막 방문: {lastVisited}</span>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  span {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
