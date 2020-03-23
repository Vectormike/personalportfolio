import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { faGithub, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SocialWrapper, Email, StyledLink, StyledIcon } from './styles';

export const Social = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `);

  return (
    <>
      <Email href={`mailto:${site.siteMetadata.social.email}`}>{site.siteMetadata.social.email}</Email>
      <SocialWrapper>
        <StyledLink rel="noreferrer" target="_blank" aria-label="Github" href={`${site.siteMetadata.social.github}`}>
          <StyledIcon icon={faGithub} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Linkedin"
          href={`${site.siteMetadata.social.linkedin}`}
        >
          <StyledIcon icon={faLinkedinIn} />
        </StyledLink>

        <StyledLink rel="noreferrer" target="_blank" aria-label="Twitter" href={`${site.siteMetadata.social.twitter}`}>
          <StyledIcon icon={faTwitter} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Instagram"
          href={`${site.siteMetadata.social.instagram}`}
        >
          <StyledIcon icon={faInstagram} />
        </StyledLink>
      </SocialWrapper>
    </>
  );
};
