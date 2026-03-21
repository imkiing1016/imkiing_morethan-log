import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="content">
        <div className="avatar">
          <Image src={CONFIG.profile.image} width={120} height={120} alt="" />
        </div>
        <div className="info">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="bio">{CONFIG.profile.bio}</div>
        </div>
        <div className="social">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <AiOutlineGithub />
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <AiOutlineMail />
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <AiOutlineInstagram />
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background: ${({ theme }) =>
      theme.scheme === "light"
        ? "linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)"
        : `linear-gradient(135deg, ${theme.colors.gray4} 0%, rgba(234, 88, 12, 0.08) 100%)`};
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1rem;
      border: 3px solid rgba(234, 88, 12, 0.3);

      img {
        object-fit: cover;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;

      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
      }
      .role {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.gray10};
      }
    }

    .social {
      display: flex;
      gap: 0.75rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
        background-color: ${({ theme }) => theme.colors.gray3};
        transition: all 0.2s ease;

        &:hover {
          color: rgb(234, 88, 12);
          background-color: ${({ theme }) => theme.colors.gray5};
          transform: translateY(-2px);
        }
      }
    }
  }
`
