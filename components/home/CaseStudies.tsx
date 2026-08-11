import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { caseStudies } from "../../src/data/caseStudies";

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary} 0%, #1a3a40 100%);
  color: ${({ theme }) => theme.colors.light};

  ${sizeAndDown("md")} {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Eyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
`;

const Title = styled.h2`
  font-family: "Gilroy", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0 0;

  ${sizeAndDown("md")} {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${sizeAndDown("md")} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const CompanyType = styled.p`
  font-size: 0.95rem;
  opacity: 0.75;
  margin: 0 0 0.75rem;
`;

const ServiceTag = styled(Link)`
  display: inline-block;
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.teal};
  background: rgba(44, 206, 210, 0.12);
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
  text-decoration: none;

  &:hover {
    background: rgba(44, 206, 210, 0.22);
  }
`;

const Metric = styled.p`
  font-family: "Gilroy", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 1.25rem;
  line-height: 1.3;
`;

const Field = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FieldLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.35rem;
`;

const FieldText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
`;

const Attribution = styled.p`
  font-size: 0.85rem;
  opacity: 0.6;
  margin: 1.5rem 0 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function CaseStudies() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Results</Eyebrow>
          <Title>Case Studies</Title>
        </Header>

        <Grid>
          {caseStudies.map((study, index) => (
            <Card key={index}>
              <CompanyType>{study.companyType}</CompanyType>
              <ServiceTag to={`/services/${study.serviceSlug}`}>{study.serviceName}</ServiceTag>
              <Metric>{study.metric}</Metric>
              <Field>
                <FieldLabel>Challenge</FieldLabel>
                <FieldText>{study.challenge}</FieldText>
              </Field>
              <Field>
                <FieldLabel>Approach</FieldLabel>
                <FieldText>{study.approach}</FieldText>
              </Field>
              <Field>
                <FieldLabel>Result</FieldLabel>
                <FieldText>{study.result}</FieldText>
              </Field>
              <Attribution>— {study.role}</Attribution>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
