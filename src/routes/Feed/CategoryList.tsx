import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { DEFAULT_CATEGORY } from "src/constants"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"
import { getColorClassByName } from "src/components/Category"

type Props = {}

const CategoryList: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY

  const handleClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    })
  }

  return (
    <StyledWrapper>
      <div className="section-title">카테고리</div>
      <div className="list">
        {Object.keys(data).map((key) => {
          const isActive = key === currentCategory
          const dotColor = key === DEFAULT_CATEGORY ? "rgb(234 179 8)" : getColorClassByName(key)
          return (
            <a
              key={key}
              className={`item ${isActive ? "active" : ""}`}
              onClick={() => handleClick(key)}
            >
              <span className="dot" style={{ backgroundColor: dotColor }} />
              <span className="name">{key === DEFAULT_CATEGORY ? "전체" : key}</span>
              <span className="count">{data[key]}</span>
            </a>
          )
        })}
      </div>
    </StyledWrapper>
  )
}

export default CategoryList

const StyledWrapper = styled.div`
  margin-bottom: 1.5rem;

  .section-title {
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray8};
    letter-spacing: 0.05em;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.15s ease;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray4};
    }

    &.active {
      background-color: rgba(234, 179, 8, 0.15);
      color: ${({ theme }) => theme.colors.gray12};

      .count {
        background-color: rgba(234, 179, 8, 0.3);
        color: rgb(234, 179, 8);
      }
    }
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 0.625rem;
  }

  .name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .count {
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.gray9};
    flex-shrink: 0;
    min-width: 1.5rem;
    text-align: center;
  }
`
