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
      <div className="card">
        <div className="avatar-area">
          <div className="avatar">
            <Image src={CONFIG.profile.image} width={96} height={96} alt="" />
          </div>
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

  > .card {
    margin-bottom: 2.25rem;
    border-radius: 1.25rem;
    overflow: hidden;
    padding: 1.75rem 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#f4f4f5" : theme.colors.gray4};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .avatar-area {
      margin-bottom: 1rem;

      .avatar {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        img {
          object-fit: cover;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;

      .name {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.75rem;
        margin-bottom: 0.125rem;
      }

      .role {
        font-size: 0.8rem;
        line-height: 1.25rem;
        color: rgb(234, 88, 12);
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .bio {
        font-size: 0.8rem;
        line-height: 1.4rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.gray10};
      }
    }

    .social {
      display: flex;
      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        font-size: 1.15rem;
        color: ${({ theme }) => theme.colors.gray11};
        background-color: ${({ theme }) =>
          theme.scheme === "light"
            ? "rgba(0, 0, 0, 0.05)"
            : "rgba(255, 255, 255, 0.08)"};
        transition: all 0.2s ease;

        &:hover {
          color: rgb(234, 88, 12);
          background-color: ${({ theme }) =>
            theme.scheme === "light"
              ? "rgba(234, 88, 12, 0.1)"
              : "rgba(234, 88, 12, 0.15)"};
          transform: translateY(-2px);
        }
      }
    }
  }
`
