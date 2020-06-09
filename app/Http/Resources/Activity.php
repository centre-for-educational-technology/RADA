<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Activity extends JsonResource
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
            'difficulty_level' => $this->difficulty_level,
            'playing_time' => $this->playing_time,
            'language' => $this->language,
            'contact_information' => $this->contact_information,
            'featured_image' => $this->getFeaturedImageUrl(),
            'proximity_check' => (bool)$this->proximity_check,
            'proximity_radius' => $this->proximity_radius,
            'user_id' => $this->user_id,
            'promoted' => (bool)$this->promoted,
            'created_at' => $this->created_at->toRfc3339String(),
            'updated_at' => $this->updated_at->toRfc3339String(),
            'pin' => $this->pin,
            'keywords' => $this->getKeywordsAsArray(),
            'parent_id' => $this->parent_id,
            'enforce_items_order' => (bool)$this->enforce_items_order,
            'subject' => $this->getSubjectsAsArray(),
            'age_of_participants' => $this->getAgeOfParticipants(),
            'started' => (bool)$this->started,
            'is_template' => (bool)$this->is_template,
            'activity_items' => ActivityItem::collection($this->activityItems),
        ];
    }
}
