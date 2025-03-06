"use client";
import Modal from "@/components/modal";
import * as React from "react";

interface IRulesSoftProps {}

export default function CheckOnReviews(props: IRulesSoftProps) {
  return (
    <Modal
      header={
        <>
          <span className="text-base underline">checks on reviews</span>
        </>
      }
      title="We perform checks on reviews"
      classNameTitle="text-sm underline"
      content={
        <>
          <p>
            You can only submit a review or rating of an experience to Kapanda
            if you were the person who made the booking through Kapanda. Before
            publication, each review goes through an automated tracking system,
            which collects information for each of the following criteria: who,
            what, how, and when. If the system detects something that
            contradicts our publication criteria, the review is not published.
            When the system detects a problem with a review, it may be
            automatically rejected, sent to the reviewer for validation, or
            manually reviewed by our team of content specialists who work 24/7
            to maintain the quality of the reviews on our site. In some cases,
            we will also send you an email asking you to validate your review
            before it is published. All you need to do is click on the link
            provided in the email. After publication, our team checks each
            review reported to it as not meeting our publication criteria.
          </p>
        </>
      }
    />
  );
}
