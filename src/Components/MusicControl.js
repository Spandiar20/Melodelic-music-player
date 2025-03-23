import React from 'react'

export default function MusicControl() {
  return (
    <div class="controls">
        <div className="queueIcon"> // This button is for setting queue this feature is not a priority currently

        </div>

        <div className="mainControls">

            <div className="upperControls">
              <div className="shuffle"></div>

              <div className="coreControls">
                  <div className="prevTrack"></div>

                  <div className="pauseTrack"></div>

                  <div className="nextTrack"></div>
              </div>

              <div className="favBtn"></div>
            </div>

            <div className="trackTimeline">

            </div>

        </div>

        <div className="coverView"> // This button is for cover view while playing the track and not yet a priority

        </div>
    </div>
  )
}
