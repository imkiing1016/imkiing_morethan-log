import React from "react"
import OrderButtons from "./OrderButtons"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { DEFAULT_CATEGORY } from "src/constants"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  const router = useRouter()
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY

  return (
    <StyledWrapper>
      <div className="category-label">
        {currentCategory === DEFAULT_CATEGORY ? "전체" : currentCategory} Posts
      </div>
      <OrderButtons />
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};

  .category-label {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
`
