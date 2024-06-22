import * as React from "react";
// @ts-ignore
import bini from "./bini.jpg";

export default function () {
  return (
    <section className="bini">
      <div className="frame">
        <div className="horizontal">
          <img src={bini} alt={"ביני בר לב"} />

          <div>
            <h2>ביני בר לב, עו״ד - מגשר</h2>
            <p>ממייסדיי תחום הגישור בארץ, מייסד ועומד בראש גישור ישראל.</p>
            <p>
              בעל ניסיון רב ויכולת לאתר את נקודות המחלוקות, גם בסכסוכים קשים
              ומורכבים, על מנת להגיע להסכמות ולהבאת הצדדים לכדי פיוס, הבנות
              והסכם.
              <br />
              בעל תואר ראשון (1982) ושני (2009) במשפטים באוניברסיטה העברית, בדגש
              ליישוב סכסוכים.
            </p>
            <p>
              בעל ניסיון באלפי גישורים מול רבבות מגושרים בסכסוכים מתחומים רבים
              שהגיעו לגישור באופן פרטי, ובסכסוכים שהגיעו מבתי המשפט השונים החל
              מבית המשפט העליון ומהערכאות תחתיו.
            </p>
            <p>
              עו"ד בר לב עוסק בגישור ורק בגישור החל משנת 1997. עד היום הושגו
              אלפי הסכמי גישור.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
