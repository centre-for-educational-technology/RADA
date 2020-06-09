<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityItem extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'image' => $this->getImageUrl(),
            'type' => $this->type,
            'embedded_content' => $this->embedded_content,
            'answering_time_check' => (bool)$this->answering_time_check,
            'answering_time' => $this->answering_time,
            'language' => $this->language,
            'latitude' => (float)$this->latitude,
            'longitude' => (float)$this->longitude,
            'access_code' => $this->access_code,
            'access_code_clues' => $this->access_code_clues,
            'read_more' => $this->read_more,
            'user_id' => $this->user_id,
            'created_at' => $this->created_at->toRfc3339String(),
            'updated_at' => $this->updated_at->toRfc3339String(),
            'missing_word' => $this->missing_word,
            'points' => json_decode($this->points, true),
            'is_flash' => (bool)$this->is_flash,
            'options' => $this->options, // TODO This might also need a resource
            'pairs' => $this->pairs, // TODO This might also need a resource
        ];
    }
}
