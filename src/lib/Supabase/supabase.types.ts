export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookmark: {
        Row: {
          created_at: string
          description: string | null
          id: number
          parent_id: number | null
          title: string
          type: string
          value: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          parent_id?: number | null
          title: string
          type?: string
          value: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          parent_id?: number | null
          title?: string
          type?: string
          value?: string
        }
        Relationships: []
      }
      main_message: {
        Row: {
          created_at: string
          id: number
          text: string
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          text: string
          user_id?: number
        }
        Update: {
          created_at?: string
          id?: number
          text?: string
          user_id?: number
        }
        Relationships: []
      }
      meal_menu: {
        Row: {
          created_at: string | null
          id: number
          main: string | null
          serve_at: string
          sub: string | null
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          main?: string | null
          serve_at: string
          sub?: string | null
          type?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          main?: string | null
          serve_at?: string
          sub?: string | null
          type?: string
        }
        Relationships: []
      }
      schedule: {
        Row: {
          created_at: string | null
          description: string | null
          end_at: string
          id: number
          start_at: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_at: string
          id?: number
          start_at: string
          title: string
          type?: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_at?: string
          id?: number
          start_at?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
