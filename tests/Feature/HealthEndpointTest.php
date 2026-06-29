<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthEndpointTest extends TestCase
{
    public function test_api_health_endpoint_returns_standard_response_shape(): void
    {
        $response = $this->getJson('/api/health');

        $response->assertOk();
        $response->assertJsonPath('data.status', 'ok');
        $response->assertJsonStructure([
            'data' => [
                'status',
                'service',
            ],
            'meta',
            'errors',
        ]);
    }
}
