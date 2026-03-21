import styled from "@emotion/styled"
import Image from "next/image"
import { CONFIG } from "site.config"
import { NextPageWithLayout } from "src/types"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"

const AboutPage: NextPageWithLayout = () => {
  return (
    <StyledWrapper>
      <div className="profile-section">
        <div className="avatar">
          <Image src={CONFIG.profile.image} width={160} height={160} alt="" />
        </div>
        <h1 className="name">{CONFIG.profile.name}</h1>
        <p className="role">{CONFIG.profile.role}</p>
        <p className="bio">{CONFIG.profile.bio}</p>
        <div className="social">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub />
              <span>GitHub</span>
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail />
              <span>Email</span>
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram />
              <span>Instagram</span>
            </a>
          )}
        </div>
      </div>
      <div className="about-content">
        <h2>안녕하세요!</h2>
        <p>
          방문해 주셔서 감사합니다.
        </p>
        <p>
          저는 <strong>{CONFIG.profile.role}</strong>를 꿈꾸고 있는 <strong>{CONFIG.profile.name}</strong>입니다.
        </p>
        <p>
          {CONFIG.profile.bio}
        </p>
        <p>
          이 블로그는 제가 공부하고 연구한 내용을 기록하는 공간입니다.
        </p>
        <p>
          궁금한 점이나 피드백이 있으시면 언제든 연락해 주세요!
        </p>
      </div>
    </StyledWrapper>
  )
}

export default AboutPage

const StyledWrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 3rem 1rem;

  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    .avatar {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

      img {
        object-fit: cover;
      }
    }

    .name {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    .role {
      font-size: 1rem;
      color: rgb(234, 88, 12);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .bio {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.gray10};
      text-align: center;
      margin-bottom: 1.25rem;
    }

    .social {
      display: flex;
      gap: 0.75rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.5rem 1rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray11};
        background-color: ${({ theme }) =>
          theme.scheme === "light"
            ? "rgba(0, 0, 0, 0.05)"
            : "rgba(255, 255, 255, 0.08)"};
        transition: all 0.2s ease;

        svg {
          font-size: 1.1rem;
        }

        &:hover {
          color: rgb(234, 88, 12);
          background-color: ${({ theme }) =>
            theme.scheme === "light"
              ? "rgba(234, 88, 12, 0.1)"
              : "rgba(234, 88, 12, 0.15)"};
        }
      }
    }
  }

  .about-content {
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#f9fafb" : theme.colors.gray4};

    h2 {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.gray11};
      margin-bottom: 0.75rem;

      strong {
        color: ${({ theme }) => theme.colors.gray12};
      }
    }
  }
`
