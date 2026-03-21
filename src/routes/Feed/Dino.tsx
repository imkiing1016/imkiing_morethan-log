import styled from "@emotion/styled"
import React, { useState, useCallback } from "react"

const Dino: React.FC = () => {
  const [jumping, setJumping] = useState(false)

  const handleClick = useCallback(() => {
    if (jumping) return
    setJumping(true)
    setTimeout(() => setJumping(false), 500)
  }, [jumping])

  return (
    <StyledWrapper onClick={handleClick}>
      <div className="scene">
        <div className="ground" />
        <div className={`pikachu-wrap ${jumping ? "jump" : ""}`}>
          <div className={`pikachu ${jumping ? "" : "walk"}`} />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Dino

const StyledWrapper = styled.div`
  cursor: pointer;
  user-select: none;

  .scene {
    position: relative;
    width: 100%;
    height: 90px;
    border-radius: 0.75rem;
  }

  .ground {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray6};
  }

  .pikachu-wrap {
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);

    &.jump {
      animation: pikachuJump 0.5s ease;
    }
  }

  .pikachu {
    width: 64px;
    height: 64px;
    background-image: url('/pikachu_sprite.png');
    background-size: 256px 256px;
    background-repeat: no-repeat;
    background-position: 0px -128px;
    image-rendering: pixelated;

    &.walk {
      animation: pikachuWalk 0.6s steps(4) infinite;
    }
  }

  @keyframes pikachuJump {
    0% { bottom: 9px; }
    40% { bottom: 55px; }
    100% { bottom: 9px; }
  }

  @keyframes pikachuWalk {
    from {
      background-position: 0px -128px;
    }
    to {
      background-position: -256px -128px;
    }
  }
`
