<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class Answer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'game_id' => $this->game_id,
            'activity_item_id' => $this->activity_item_id,
            'answer' => json_decode($this->answer, true),
            'image' => $this->getImageUrl(),
            'correct' => (bool)$this->correct,
            'is_answered' => (bool)$this->is_answered,
            'answering_start_time' => $this->answering_start_time ? (new Carbon($this->answering_start_time))->toRfc3339String() : null,
            'answering_end_time' => (new Carbon($this->answering_end_time))->toRfc3339String(),
            'created_at' => $this->created_at->toRfc3339String(),
            'updated_at' => $this->updated_at->toRfc3339String(),
            'grade' => $this->grade,
        ];
    }
}
